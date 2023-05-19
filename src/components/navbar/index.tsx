import style from "./navbar.module.scss";
import { ReactNode } from "react";
import { CgTrending } from "react-icons/cg";
import { BiTv, BiLogOut } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { A, usePath } from "hookrouter";
import userImage from "../../assets/user-profile.jpg";
import {} from "hookrouter";
import { navigate } from "hookrouter";

export const SidebarData = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: <AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Trending",
		path: "/trending",
		icon: <CgTrending />,
		cName: "nav-text",
	},
	{
		title: "Watch",
		path: "/watch",
		icon: <BiTv />,
		cName: "nav-text",
	},
	{
		title: "Friends",
		path: "/friends",
		icon: <BsFillPeopleFill />,
		cName: "nav-text",
	},
	{
		title: "Messages",
		path: "/messages",
		icon: <AiFillMessage />,
		cName: "nav-text",
	},
];

type Props = {
	children: ReactNode;
};

export function NavBar(props: Props) {
	const path = usePath();

	function signOut() {
		navigate("/login", true);
		localStorage.removeItem("@user:id");
	}

	return (
		<div>
			<div className={style.navbarWrapper}>
				<div className={style.navLogo}>
					<span className={style.logo}> G </span>
					<span className={style.logoText}> GamerLife</span>
				</div>
				<div className={style.itensNavBar}>
					<nav>
						{SidebarData.map((item, index) => {
							return (
								<ul>
									<li key={index} className={style.navText}>
										<span>
											<A
												href={item.path}
												className={
													path == item.path ? style.isActive : style.noActive
												}
											>
												{item.icon} <span>{item.title}</span>
											</A>
										</span>
									</li>
								</ul>
							);
						})}
					</nav>
				</div>
				<div className={style.userInfo}>
					<img src={userImage} alt="userImage" />
					<span className={style.userName}> Peter </span>
					<button onClick={signOut}>
						<BiLogOut size="25px" />
					</button>
				</div>
			</div>
			{props.children}
		</div>
	);
}
