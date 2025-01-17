import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Sheet,
  Form,
  Icon,
  IconButton,
  Stack,
} from '~paragon-react';
import { Close } from '~paragon-icons';

import { LANGUAGES } from '../config';
// eslint-disable-next-line import/no-named-as-default
import SettingsContext from '../context/SettingsContext';
import { THEMES } from '../../theme-config';

export interface ISetting {
  showMinimizedTitle?: boolean,
}

function Settings({ showMinimizedTitle }: ISetting) {
  const {
    settings,
    handleSettingsChange,
    showSettings,
    closeSettings,
  } = useContext(SettingsContext);

  return (
    <Sheet
      position="right"
      show={showSettings}
      variant="light"
      onClose={closeSettings}
    >
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="mb-0">Settings</h3>
        <IconButton
          src={Close}
          iconAs={Icon}
          alt="Close settings"
          onClick={closeSettings}
          size="sm"
        />
      </div>
      <Stack gap={3}>
        <Form.Group>
          <Form.Control
            as="select"
            value={settings.theme}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSettingsChange('theme', e.target.value)}
            floatingLabel="Theme"
          >
            {THEMES.map(theme => (
              <option
                key={theme.id}
                value={theme.id}
              >
                {theme.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="select"
            value={settings.direction}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSettingsChange('direction', e.target.value)}
            floatingLabel="Direction"
          >
            <option value="ltr">Left to right</option>
            <option value="rtl">Right to left</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="select"
            value={settings.language}
            onChange={(e: { target: { value: string; }; }) => handleSettingsChange('language', e.target.value)}
            floatingLabel="Component Language"
          >
            {LANGUAGES.map(lang => (
              <option
                key={lang.code}
                value={lang.code}
              >
                {lang.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {!showMinimizedTitle && (
          <Form.Group>
            <Form.Control
              as="select"
              value={settings.containerWidth}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSettingsChange('containerWidth', e.target.value)}
              floatingLabel="Container Width"
            >
              <option value="xs">xs</option>
              <option value="sm">sm</option>
              <option value="md">md (default)</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
            </Form.Control>
          </Form.Group>
        )}
      </Stack>
    </Sheet>
  );
}

Settings.propTypes = {
  showMinimizedTitle: PropTypes.bool,
};

Settings.defaultProps = {
  showMinimizedTitle: false,
};

export default Settings;
