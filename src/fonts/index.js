import { useFonts } from 'expo-font';

const useMyFonts = () =>
  useFonts({
    'Neutra Text': require('./neutra-text.otf'),
    'Neutra Text Bold': require('./neutra-text-bold.otf'),
    'Neutra Text Bold Italic': require('./neutra-text-bold-italic.otf'),
    'Neutra Text Light': require('./neutra-text-light.otf'),
    'Neutra Text TF': require('./neutra-text-tf.otf'),
  });
export default useMyFonts;
