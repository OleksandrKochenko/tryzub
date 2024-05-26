import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { switchLang } from '../../redux/user/slice';

export const Langs = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  return (
    <div className="flex">
      {lang !== 'eng' ? (
        <Icon
          icon="circle-flags:ua"
          className="text-[3.5vh] cursor-pointer hover:scale-125 transition-transform duration-300"
          onClick={() => dispatch(switchLang('eng'))}
      />
      ) : (
        <Icon
          icon="circle-flags:ca"
          className="text-[3.5vh] cursor-pointer hover:scale-125 transition-transform duration-300"
          onClick={() => dispatch(switchLang('ukr'))}
      />
      )}
    </div>
  );
};
