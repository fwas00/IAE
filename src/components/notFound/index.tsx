import style from "./notfound.module.scss";
import error404 from "../../assets/error404.gif";

export function NotFound() {
	return (
		<div className={style.notFoundWrapper}>
			<img src={error404}/>
			<span>Page Not Found</span>
		</div>
	);
}
