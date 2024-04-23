declare global {
  const Kakao: Kakao;
  interface Kakao {
    isInitialized: () => boolean;
    init: (key: string) => void;
    Auth: {
      authorize: (options: { redirectUri: string }) => void;
    };
  }
}
export default global;
