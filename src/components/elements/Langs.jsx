import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { switchLang } from '../../redux/user/slice';

export const Langs = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  console.log('lang', lang);

  return (
    <div className="flex">
      {lang !== 'eng' ? (
        <Icon
          icon="circle-flags:ua"
          className="text-[3.5vh] cursor-pointer"
          onClick={() => dispatch(switchLang('eng'))}
        />
      ) : (
        <Icon
          icon="circle-flags:uk"
          className="text-[3.5vh] cursor-pointer"
          onClick={() => dispatch(switchLang('ukr'))}
        />
      )}
    </div>
  );
};
