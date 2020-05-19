import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function Widget8(props) {
	const theme = useTheme();
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Card className="w-full rounded-8 shadow-none">
			<AppBar position="static">
				<div className="p-16 px-4 flex flex-row items-center justify-between">
					<div className="px-12">
						<Typography className="h1 font-300" color="inherit">
							Sales
						</Typography>
						<Typography className="h5" color="inherit">
							Lifetime sum of your sales
						</Typography>
					</div>

					<div>
						<IconButton aria-label="more" color="inherit">
							<Icon>more_vert</Icon>
						</IconButton>
					</div>
				</div>
				<div className="p-16 pt-8 flex flex-row justify-between items-end">
					<Typography className="text-48 font-300 leading-none" color="inherit">
						{props.data.today}
					</Typography>
					<div className="flex flex-row items-center">
						{props.data.change.value > 0 && <Icon className="text-green">trending_up</Icon>}
						{props.data.change.value < 0 && <Icon className="text-red">trending_down</Icon>}
						<div className="mx-8">
							{props.data.change.value}({props.data.change.percentage}%)
						</div>
					</div>
				</div>
				<Tabs value={tabIndex} onChange={(ev, index) => setTabIndex(index)} variant="fullWidth">
					<Tab label="1Day" className="min-w-0" />
					<Tab label="1Week" className="min-w-0" />
					<Tab label="1Month" className="min-w-0" />
				</Tabs>
			</AppBar>
			<Line
				data={{
					labels: props.data.labels,
					datasets: props.data.datasets[tabIndex].map(obj => ({
						...obj,
						borderColor: theme.palette.secondary.main
					}))
				}}
				options={props.data.options}
			/>
		</Card>
	);
}

export default React.memo(Widget8);
