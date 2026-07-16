/** Match sa-sdk-javascript encodeTrackData so the collector can decode payloads. */
const base64Encode = (input: string) => {
  try {
    return btoa(
      encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (_, hex) => String.fromCharCode(Number.parseInt(hex, 16)))
    );
  } catch {
    return input;
  }
};

const hashCode = (input: string) => {
  if (!input.length) return 0;

  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash &= hash;
  }
  return hash;
};

export const encodeSensorsTrackBody = (payload: unknown) => {
  const json = typeof payload === 'string' ? payload : JSON.stringify(payload);
  const data = base64Encode(json);
  const ext = `crc=${hashCode(data)}`;

  return new URLSearchParams({
    data,
    ext,
  });
};
