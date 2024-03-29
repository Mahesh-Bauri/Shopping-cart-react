import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { FaUserCircle } from "react-icons/fa";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
	UserIcon,
	UserName,
} from "./navigation.styles";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { signOutStart } from "../../../store/user/user.action";
// import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const signOutUser = () => {
		dispatch(signOutStart());
	};
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo />
					{/* <h3
            style={{
              // marginLeft: "14px",
              padding: "10px",
              paddingLeft: 0,
            }}
          >
            Shopping Cart
          </h3> */}
				</LogoContainer>
				<NavLinks>
					{currentUser && currentUser.displayName && (
						<UserIcon as="span">
							<FaUserCircle />
							<UserName>{currentUser.displayName}</UserName>
						</UserIcon>
					)}
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
