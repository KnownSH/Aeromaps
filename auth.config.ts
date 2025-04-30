import Discord from '@auth/core/providers/discord';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token = Object.assign({}, token, { access_token: account.access_token });
      }
      return token
    },
    async session({session, token}) {
      if (session) {
        let response = await fetch("https://discordapp.com/api/users/@me/guilds", {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json"
          }
        });
        let json = await response.json();
        session.user.guilds = json;

        const url = new URL(session.user.image)
        const userId = url.pathname.split("/")[2]
        session.user.id = userId
      }
      return session
    }
  },
  providers: [
    Discord({
      clientId: import.meta.env.DISCORD_CLIENT_ID,
      clientSecret: import.meta.env.DISCORD_AUTH_SECRET,
      authorization: { params: { scope: "identify guilds" } },
      profile(profile) {
        if (profile.avatar === null) {
          const defaultAvatarNumber =
            profile.discriminator === "0"
              ? Number(BigInt(profile.id) >> BigInt(22)) % 6
              : parseInt(profile.discriminator) % 5
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png"
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        }
        return {
          id: profile.id,
          name: profile.global_name ?? profile.username,
          image: profile.image_url,
          guilds: profile.guilds,
        }
      }
    }),
  ]
});