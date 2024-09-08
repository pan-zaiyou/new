import { useTheme } from '@mui/material/styles';

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', ...others }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="827ffd0a73"><path d="M 119.492188 119.492188 L 255 119.492188 L 255 255 L 119.492188 255 Z M 119.492188 119.492188 " clip-rule="nonzero"/></clipPath><image x="0" y="0" width="160" xlink:href="data:image/png;base64,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" id="d24843d4ec" height="160" preserveAspectRatio="xMidYMid meet"/></defs><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fill-opacity="1"/><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fill-opacity="1"/><g clip-path="url(#827ffd0a73)"><g transform="matrix(0.848437, 0, 0, 0.848437, 119.492941, 119.492923)"><image x="0" y="0" width="160" xlink:href="data:image/png;base64,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" height="160" preserveAspectRatio="xMidYMid meet"/></g></g></svg>
      <span style={{ fontSize: '20px', fontWeight: 'bold', color: theme.palette.mode === 'dark' || reverse ? theme.palette.common.white : theme.palette.common.black }}>
        老叔基场
      </span>
    </div>
  );
};

export default LogoMain;
