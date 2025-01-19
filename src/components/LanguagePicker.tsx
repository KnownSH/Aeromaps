import * as React from 'react';
import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/base'
import { languages } from '@/i18n/ui';

interface LanguagePickerProps {
  languageChoosen: string,
}

export default function LanguagePicker({ languageChoosen = "en" }: LanguagePickerProps) {
  return (
    <Dropdown>
      <MenuButton>Languages</MenuButton>
      <Menu>
        {Object.entries(languages).map(([lang, label]) => {
          if (lang != languageChoosen) {
            return (
              <MenuItem>
                <a href={`/maps?lang=${lang}`}>{label}</a>
              </MenuItem>
            );
          }
        })}
      </Menu>
    </Dropdown>
  );
}