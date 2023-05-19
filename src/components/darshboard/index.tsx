import style from "./dashboard.module.scss";
import { BiSearch } from "react-icons/bi";
import { RiNotificationOffLine } from "react-icons/ri";
import userImage from "../../assets/user-profile.jpg";
import { useState } from "react";
import Select from "react-dropdown-select";


export const cardsItens = [
];


export function Darshboard() {

	return (
		<div className={style.dashboardWrapper}>
			<div className={style.dashboardTop}>
				<div className={style.searchBox}>
					<span>
						<BiSearch />
						<input name="search" placeholder="Find a match..." />
					</span>
				</div>
				<div className={style.userImage}>
					<RiNotificationOffLine size="20px" />
					<img src={userImage} alt="userImage" />
				</div>
			</div>
			<div className={style.dashboardMain}>
				
				<div className={style.matchBox}>
						
					<div className={style.matchList}>
						<span className={style.top}>
							Next match
							<Select
								className={style.dropdown}
								options={matchOptions}
								onChange={() => setMatchOptions(matchOption)}
							/>
						</span>
						<span className={style.list}>
							{matchList.map((item, index) => {
								return (
									<ul>
										<li key={index}>
											<span className={style.hour}>{item.hour}</span>
											<span className={style.circle} />
											<span className={style.time1}>
												{item.time1} vs {item.time2}
											</span>
										</li>
									</ul>
								);
							})}
						</span>
					</div>
				</div>
			</div>
			<div className={style.dashboardBottom}></div>
		</div>
	);
}
