import React from 'react';
import { useDispatch } from 'react-redux';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import BACKGROUND from 'app/assets/images/bot-board/background.jpg';

const useStyles = makeStyles(theme => ({
	headerWrapper: {
		cursor: 'pointer',
		background: `url(${BACKGROUND})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	board: {
		cursor: 'pointer',
		boxShadow: theme.shadows[0],
		borderRadius: '.8rem',
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	}
}));

function LeaderBoardPage(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);

	// useEffect(() => {
	// 	dispatch(Actions.getBoards());
	// 	return () => {
	// 		dispatch(Actions.resetBoards());
	// 	};
	// }, [dispatch]);

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="資金排行榜" breadCrumbActive="資金排行榜" />
			</FuseAnimate>

			<FuseAnimateGroup
				className="w-full flex flex-wrap justify-start px-0 sm:px-8"
				enter={{
					animation: 'transition.slideUpBigIn',
					duration: 300
				}}
			>
				<div
					className={clsx(
						classes.headerWrapper,
						'h-128 sm:h-200 m-16 sm:m-24 flex justify-center items-center rounded-8'
					)}
				>
					<Typography className="text-32 sm:text-40 font-semibold" color="inherit">
						我的機器人
					</Typography>
				</div>
			</FuseAnimateGroup>

			{/* <FuseAnimateGroup
				className="w-full flex flex-wrap justify-start px-0 sm:px-8"
				enter={{
					animation: 'transition.slideUpBigIn',
					duration: 300
				}}
			>
				{boards.map(board => (
					<Link
						key={board.id}
						to={`/bot-board/${board.id}/${board.uri}`}
						className={clsx(classes.board, 'w-full sm:w-1/4 p-16')}
						role="button"
					>
						<BotInfoCard
							title="CPU 使用率"
							content="35%"
							change={-3}
							iconType="cpu"
							iconColorSchema="primary"
							chartId="cpu"
							chartColors="primary"
							tooltipTitle="使用率"
						/>
					</Link>
				))}
				<Link to="/bot-board/new" className={clsx(classes.board, 'w-full sm:w-1/4 p-16')} role="button">
					<BotAddCard title="" content="" iconType="plus-circle" iconColorSchema="primary" />
				</Link>
			</FuseAnimateGroup> */}
		</div>
	);
}

export default LeaderBoardPage;