import { MagnifyingGlass } from 'react-loader-spinner';
import { Loader } from './loader.styled';

export const Spinner = () => {
  return (
    <Loader>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
      />
    </Loader>
  );
};
