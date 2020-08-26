import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FusePageCarded from '@fuse/core/FusePageCarded';
import * as Actions from 'app/store/actions';

import UserListDialog from './UserListDialog';
import UserListFilterPanel from './UserListFilterPanel';
import UserListHeader from './UserListHeader';
import UserListTable from './UserListTable';

function UserList() {
	const dispatch = useDispatch();
	const searchText = useSelector(({ userList }) => userList.searchText);
	const searchCondition = useSelector(({ userList }) => userList.searchCondition);

	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(
			Actions.getUserList({
				filter: searchText,
				fields: 'displayName,email,phone',
				conditions: searchCondition,
				page: 1,
				limit: 20,
				sort: 'updatedAt',
				order: -1
			})
		);
		// dispatch(Actions.getUserData());
	}, [dispatch, searchText, searchCondition]);

	return (
		<>
			<FusePageCarded
				classes={{
					contentWrapper: 'p-0 sm:px-24 sm:pt-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-136'
				}}
				header={<UserListHeader pageLayout={pageLayout} />}
				content={<UserListTable />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
			<UserListFilterPanel />
			<UserListDialog />
		</>
	);
}

export default UserList;
