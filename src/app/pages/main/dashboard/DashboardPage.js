import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WidgetStatisticsCard from 'app/fuse-layouts/shared-components/StatisticsCard';
import WidgetBasicCard from 'app/fuse-layouts/shared-components/BasicCard';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import WidgetRevenue from './widgets/WidgetRevenue';
import WidgetFundingRatio from './widgets/WidgetFundingRatio';

import reducer from './store/reducers';
// import * as Actions from './store/actions';

function DashboardPage() {
	const dispatch = useDispatch();
	// const widgets = useSelector(({ analyticsDashboardApp }) => analyticsDashboardApp.widgets.data);

	useEffect(() => {
		// dispatch(Actions.getWidgets());
	}, [dispatch]);

	// if (!widgets) {
	// 	return null;
	// }
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs breadCrumbTitle="首頁" breadCrumbActive="首頁" />
			</FuseAnimate>

			<WidgetRevenue />

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">
						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 sm:text-20 font-medium">運行狀態</Typography>
						</FuseAnimate>
						<div className="flex flex-col sm:flex sm:flex-row">
							<div className="widget flex w-full sm:w-1/4 p-16">
								<WidgetBasicCard
									title="借貸總資金"
									content="3M"
									iconType="dollar-sign"
									iconColorSchema="primary"
								/>
							</div>
							<div className="widget flex w-full sm:w-1/4 p-16">
								<WidgetBasicCard
									title="運行機器人"
									content="450"
									iconType="layers"
									iconColorSchema="secondary"
								/>
							</div>
							<div className="widget w-full sm:w-1/4 p-16">
								<WidgetBasicCard
									title="活躍用戶數"
									content="1995"
									iconType="users"
									iconColorSchema="success"
								/>
							</div>
							<div className="widget w-full sm:w-1/4 p-16">
								<WidgetBasicCard
									title="未處理訂單"
									content="2"
									iconType="alert-octagon"
									iconColorSchema="error"
								/>
							</div>
						</div>

						<FuseAnimate delay={600}>
							<Typography className="p-16 py-8 text-18 sm:text-20 sm:text-20 font-medium">
								系統健康度
							</Typography>
						</FuseAnimate>
						<div className="flex flex-col sm:flex sm:flex-row">
							<div className="widget flex w-full sm:w-1/3 p-16">
								<WidgetStatisticsCard
									title="CPU 使用率"
									content="35%"
									change={-3}
									iconType="cpu"
									iconColorSchema="primary"
									chartId="cpu"
									chartColors="primary"
									tooltipTitle="使用率"
								/>
							</div>
							<div className="widget flex w-full sm:w-1/3 p-16">
								<WidgetStatisticsCard
									title="Memory 使用率"
									content="450Mb"
									change={32}
									iconType="memory"
									iconColorSchema="secondary"
									chartId="memory"
									chartColors="secondary"
									tooltipTitle="使用率"
								/>
							</div>
							<div className="widget w-full sm:w-1/3 p-16">
								<WidgetStatisticsCard
									title="網路使用率"
									content="20Kb"
									change={12}
									iconType="network"
									iconColorSchema="success"
									chartId="network"
									chartColors="success"
									tooltipTitle="使用率"
								/>
							</div>
						</div>

						<FuseAnimate delay={600}>
							<Typography className="p-16 py-8 text-18 sm:text-20 sm:text-20 font-medium">
								近期訂單
							</Typography>
						</FuseAnimate>
						<div className="widget w-full p-16 pb-20">{/* <Widget5 data={widgets.widget5} /> */}</div>

						{/* <FuseAnimate delay={600}>
							<Typography className="px-16 py-8 text-18 font-300">Where are your users?</Typography>
						</FuseAnimate>
						<div className="widget w-full p-16 pb-20">
							<Widget6 data={widgets.widget6} />
						</div> */}
					</div>

					<div className="flex flex-wrap w-full md:w-320 lg:w-400">
						<div className="w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-medium">統計表</Typography>
							</FuseAnimate>

							<div className="widget w-full p-16">
								<WidgetFundingRatio />
							</div>
						</div>

						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<div className="px-16 pb-8 text-18 font-300">How are your sales?</div>
							</FuseAnimate>

							<div className="widget w-full p-16">
								<Widget8 data={widgets.widget8} />
							</div>
						</div>

						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
									What are your top campaigns?
								</Typography>
							</FuseAnimate>
							<div className="widget w-full p-16">
								<Widget9 data={widgets.widget9} />
							</div>
						</div> */}
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(DashboardPage);
