import { FC } from 'react';
import style from './blur.module.scss';

interface Props {
	color: string;
	left: string;
	right: string;
	bottom: string;
}

export const Blur: FC<Partial<Props>> = ({ bottom, color, left, right }) => {
	return <span style={{ bottom, left, right, backgroundColor: color }} className={style.blur}></span>;
};
