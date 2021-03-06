import React from 'react';
import { Anchor } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LOGO from 'app/assets/images/logo/new-logo.svg';
import LanguageSwitcher from 'app/fuse-layouts/shared-components/LanguageSwitcher';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	appbarWrapper: {
		background: 'linear-gradient(to bottom, rgba(44,48,60,.9) 44%,rgba(44,48,60,.43) 73%,rgba(17,30,70,0))'
	},
	backButton: {
		background: theme.palette.primaryGradient
	}
}));

const Header = props => {
	const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);
	const classes = useStyles(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(classes.appbarWrapper, 'flex z-10 pt-12 px-16 shadow-none sm:px-24')}
				color="default"
				position="fixed"
			>
				<Toolbar
					className="p-0 rounded-lg shadow-lg"
					style={{ backgroundColor: toolbarTheme.palette.background.paper }}
				>
					<div className="flex flex-1 items-center">
						<img className="w-36 h-36 py-0 ml-16 mr-12" src={LOGO} alt="logo" />

						<Typography className="h1 mr-16 font-medium logo-text whitespace-no-wrap" color="textPrimary">
							借貸平台
						</Typography>
					</div>

					<div className="items-center mr-16 sm:mr-0">
						{/* 語言選擇 */}
						<LanguageSwitcher />
					</div>

					<Hidden smDown>
						<Button
							component={Link}
							to="/dashboard"
							variant="contained"
							startIcon={<Anchor width={16} />}
							className={clsx(classes.backButton, 'mx-16 rounded-8 font-medium text-14 text-white')}
						>
							回到首頁
						</Button>
					</Hidden>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default Header;
