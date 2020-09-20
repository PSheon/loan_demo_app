import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CssLinearProgress from 'app/fuse-layouts/shared-components/CssLinearProgress';
import * as Actions from 'app/store/actions';

import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import UserListTable from './UserListTable';

import { getInfoFromScheme, getInfoFromClassGroup, getInfoFromProgress } from 'utils';

function UserListTableWrapper() {
	const dispatch = useDispatch();
	// const contacts = useSelector(({ contactsApp }) => contactsApp.contacts.entities);
	// const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	// const user = useSelector(({ contactsApp }) => contactsApp.user);
	const USER_LIST = useSelector(({ userList }) => userList);
	const currentPageIndex = USER_LIST.routeParams.page ?? 1;
	const totalPages = USER_LIST.totalPages ?? 1;
	const isListLoading = USER_LIST.loading;
	const filteredData = USER_LIST.docs ?? [];
	const { selectedUserIds } = USER_LIST;
	const { searchText } = USER_LIST;
	const { searchCondition } = USER_LIST;

	const columns = React.useMemo(
		() => [
			{
				Header: ({ selectedFlatRows }) => {
					const selectedRowIds = selectedFlatRows.map(row => row.original.id);

					return (
						selectedFlatRows.length > 0 && <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
					);
				},
				accessor: 'photoUrl',
				Cell: ({ row }) => {
					return <Avatar className="mx-8" alt={row.original.displayName} src={row.original.photoUrl} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: '戶名',
				accessor: 'displayName',
				headerClassName: 'text-center',
				className: 'text-center font-bold',
				sortable: true
			},
			{
				Header: '信箱',
				accessor: 'mail',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '電話',
				accessor: 'phone',
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '方案',
				accessor: 'scheme',
				Cell: ({ row }) => {
					const { schemeTitle } = getInfoFromScheme(row.original.scheme);
					return (
						<Typography className="text-semibold" color="textPrimary">
							{schemeTitle}
						</Typography>
					);
				},
				headerClassName: 'text-center',
				className: 'text-center',
				sortable: true
			},
			{
				Header: '階級',
				accessor: 'class',
				Cell: ({ row }) => {
					const { classTitle } = getInfoFromClassGroup(row.original.class);
					return (
						<Typography className="text-semibold" color="textPrimary">
							{classTitle}
						</Typography>
					);
				},
				headerClassName: 'text-center',
				className: 'text-center font-bold',
				sortable: true
			},
			{
				Header: '交易進度',
				accessor: 'progress',
				Cell: ({ row }) => {
					const { percentage, colorSchema } = getInfoFromProgress(row.original.progress);
					return <CssLinearProgress percentage={percentage} colorSchema={colorSchema} />;
				},
				headerClassName: 'text-center',
				customized: true,
				sortable: true
			},
			{
				Header: '操作',
				id: 'action',
				headerClassName: 'text-center',
				className: 'flex justify-center',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<>
						{/* <IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(Actions.toggleStarredContact(row.original.id));
							}}
						>
							{user.starred && user.starred.includes(row.original.id) ? (
								<Icon>star</Icon>
							) : (
								<Icon>star_border</Icon>
							)}
						</IconButton> */}
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(Actions.removeContact(row.original.id));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</>
				)
			}
		],
		[dispatch]
	);

	function handlePageChange(wantedPageIndex) {
		if (wantedPageIndex === currentPageIndex) return;

		dispatch(
			Actions.updateUserListWithPageIndex({
				filter: searchText,
				fields: 'displayName,email,fullName,schoolName,phone,city',
				conditions: searchCondition,
				page: wantedPageIndex,
				limit: 20,
				sort: 'updatedAt',
				order: -1
			})
		);
	}
	function handleSortChange(newSorted) {
		const sortDetail = newSorted[0];

		dispatch(
			Actions.getUserList({
				filter: searchText,
				fields: 'displayName,email,fullName,schoolName,phone,city',
				conditions: searchCondition,
				page: 1,
				limit: 20,
				sort: sortDetail.id,
				order: sortDetail.desc ? 1 : -1
			})
		);
	}

	// useEffect(() => {
	// 	function getFilteredArray(entities, _searchText) {
	// 		const arr = Object.keys(entities).map(id => entities[id]);
	// 		if (_searchText.length === 0) {
	// 			return arr;
	// 		}
	// 		return FuseUtils.filterArrayByString(arr, _searchText);
	// 	}

	// 	if (contacts) {
	// 		setFilteredData(getFilteredArray(contacts, searchText));
	// 	}
	// }, [contacts, searchText]);

	if (!filteredData) {
		return <div className="flex justify-center items-center">沒有符合條件的會員</div>;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					沒有符合條件的會員 ...
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<UserListTable
				columns={columns}
				data={filteredData}
				onRowClick={(ev, row) => {
					if (row) {
						dispatch(Actions.openUserInfoDialog(row.original));
					}
				}}
			/>
		</FuseAnimate>
	);
}

export default UserListTableWrapper;
