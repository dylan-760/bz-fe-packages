export const getTrackErrorCode = (error: any) => {
  const code =
    error?.raw?.errCode ??
    error?.errCode ??
    error?.code ??
    error?.status ??
    error?.raw?.status ??
    error?.response?.status;
  return code != null && String(code).trim() !== '' ? String(code) : 'unknown_error';
};
