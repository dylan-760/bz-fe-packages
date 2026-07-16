declare module 'sa-sdk-javascript' {
  const sensors: {
    init: (config: Record<string, unknown>) => void;
    track: (event: string, properties?: Record<string, unknown>) => void;
    login: (id: string) => void;
    logout: () => void;
    registerPage: (props: Record<string, unknown>) => void;
    quick: (method: string) => void;
  };
  export default sensors;
}
