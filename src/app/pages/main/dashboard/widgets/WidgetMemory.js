// TODO
import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { Command } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
// // import StatisticsCard from 'app/fuse-layouts/shared-components/StatisticsCard';
import Chart from 'react-apexcharts';
import { memoryUsageGenerated, memoryUsageGeneratedSeries } from './StatisticsData';

const useStyles = makeStyles(theme => ({
	iconWrapper: {
		borderRadius: '50%',
		cursor: 'pointer',
		fontSize: '.75rem',
		verticalAlign: 'middle',
		backgroundColor: fade(theme.palette.secondary.light, 0.15)
	},
	iconContent: {
		color: theme.palette.secondary.dark,
		width: '32px',
		height: '32px'
	}
}));

function WidgetMemory(props) {
	const classes = useStyles();

	return (
		<Card className="w-full rounded-8 shadow-none flex flex-col justify-between">
			<div className="p-16 pb-0 flex flex-row flex-wrap justify-around items-center">
				<div>
					<div className="">
						<Typography className="h3" color="textSecondary">
							{props.data.title}
						</Typography>
						<Typography className="text-32 md:text-56 font-300 leading-none mt-8 text-bold">
							{props.data.content}
						</Typography>
					</div>

					<div className="py-4 text-16 flex flex-row items-center">
						<div className="flex flex-row items-center">
							{props.data.hint > 0 && <Icon className="text-green">trending_up</Icon>}
							{props.data.hint < 0 && <Icon className="text-red">trending_down</Icon>}
							<Typography className="mx-4">{props.data.hint}%</Typography>
						</div>
						<Typography className="whitespace-no-wrap">of target</Typography>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<div
						className={clsx(
							classes.iconWrapper,
							'text-center whiteSpace-no-wrap relative text-white inline-flex p-12 m-0'
						)}
					>
						<div className={clsx(classes.iconContent, 'flex justify-center items-center')}>
							<Command size={26} />
						</div>
					</div>
				</div>
			</div>

			<Chart options={memoryUsageGenerated} series={memoryUsageGeneratedSeries} type="area" height={128} />
		</Card>
	);
}

export default React.memo(WidgetMemory);
