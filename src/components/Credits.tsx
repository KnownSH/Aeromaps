import * as React from 'react';
import { Avatar, Box, Button, Modal, Typography, type SxProps } from '@mui/material';
import type { defaultLang, ui } from '@/i18n/ui';
import { useTranslation } from '@/i18n/utils';
import KnownPFP from "@/assets/knownsh.png";

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: 'translate(-50%, -50%)',
  width: "90%",
  fontFamily: "'Jetbrains Mono', sans-serif"
};

const subheaderStyle: React.CSSProperties = {
  fontSize: "1em",
  fontWeight: 500,
};

interface CreditsProps {
  lang: keyof typeof ui,
}

export default function Credits({ lang }: CreditsProps) {
  const t: (key: keyof typeof ui[typeof defaultLang]) => string = useTranslation(lang);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      <Button onClick={handleOpen}>Credits</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <section className='bg-black border-white p-4 w-[90%] lg:w-[60%] m-auto'>
            <h2 style={{
              fontSize: "1.3em",
              fontWeight: 900,
            }}>{t("credits.credits")}</h2>
            <div className='h-[2px] bg-white mt-1 mb-2'></div>
            <div className='flex'>
              <Avatar alt="KnownSH" src={KnownPFP.src} className='mr-3'></Avatar>
              <h3 style={subheaderStyle}>{t("credits.programmer")}<p style={{fontWeight: 200}}>KnownSH</p></h3>
            </div>
            <div className='h-[2px] bg-white mt-1 mb-2'></div>
            <div className='flex'>
              <section className='w-[50%]'>
                <span className='font-bold text-lg'>{t("credits.translators")}</span>
                <ul style={{fontSize: "0.8em"}}>
                  <li>ChoTe2171*</li>
                  <li>FlyingTankersYT*</li>
                  <li>Nonsopro</li>
                  <li>vincu_pilot</li>
                  <li>We19wayto754*</li>
                </ul>
              </section>
              <section>
                <span className='font-bold text-lg'>{t("credits.submitters")}</span>
                <ul style={{fontSize: "0.8em"}}>
                  <li>dawg888</li>
                  <li>dragoltfang</li>
                </ul>
              </section>
            </div>
            <br/>
            <span className='text-xs'>*{t("credits.submission-type")}</span>
          </section>
        </Box>
      </Modal>
    </section>
  )
}