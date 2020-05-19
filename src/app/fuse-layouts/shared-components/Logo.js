import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		'& .logo-icon': {
			minWidth: 24,
			minHeight: 24,
			maxWidth: 24,
			maxHeight: 24,
			transition: theme.transitions.create(['min-width', 'max-width', 'min-height', 'max-height'], {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		},
		'& .react-badge, & .logo-text': {
			transition: theme.transitions.create('opacity', {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		}
	},
	reactBadge: {
		backgroundColor: theme.palette.background.paper,
		color: '#61DAFB'
	}
}));

function Logo() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex items-center')}>
			<Link to="/" className="logo-icon inline-block" role="button">
				<img src="assets/images/logos/fuse.svg" alt="logo" />
			</Link>
			<Typography className="text-16 ml-12 mr-16 font-medium logo-text whitespace-no-wrap" color="textPrimary">
				借貸平台
			</Typography>
			<div className={clsx(classes.reactBadge, 'react-badge flex items-center py-4 px-8 rounded')}>
				<img
					className="react-logo"
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
					alt="TensorFlow"
					width="16"
				/>
				<span className="react-text text-12 mx-8">X</span>
				<img
					className="tensorflow-logo"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDMwLjMxMDgxIDMyLjQ5OTgyOCIKICAgaGVpZ2h0PSIxMjIuODMzOTkiCiAgIHdpZHRoPSIxMTQuNTYwNTQiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc3Ljk0MjUyOSwtMTc3LjAwMDA1KSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxnCiAgICAgICBpZD0iZzQ1NTAiPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0iZmlsbDojZTU1YjJkO2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBkPSJtIDM2MC4wNDg4Myw2ODcuODczMDUgdiAxOC44OTg0MyBsIDMyLjczMDQ3LDE4Ljg5ODQ0IHYgLTE4Ljg5ODQ0IHogbSAtNjUuNDYyODksMTguODk4NDMgdiAxOC44OTg0NCBsIDE2LjM2NTIzLDkuNDQ3MjcgViA3MTYuMjIwNyBaIG0gNDkuMDk1Nyw5LjQ0OTIyIC0xNi4zNjUyMyw5LjQ0OTIyIHYgNTYuNjkxNDEgbCAxNi4zNjUyMyw5LjQ0OTIyIHYgLTM3Ljc5NDkzIGwgMTYuMzY3MTksOS40NDkyMiB2IC0xOC44OTg0MyBsIC0xNi4zNjcxOSwtOS40NDkyMiB6IgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMjY0NTgzMzMpIgogICAgICAgICBpZD0icGF0aDQ1MDgiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlZDhlMjQ7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gMzYwLjA0ODgzLDY4Ny44NzMwNSAtNDkuMDk3NjYsMjguMzQ3NjUgdiAxOC44OTY0OSBsIDMyLjczMDQ3LC0xOC44OTY0OSB2IDE4Ljg5NjQ5IGwgMTYuMzY3MTksLTkuNDQ3MjcgeiBtIDQ5LjA5NzY1LDkuNDQ5MjIgLTE2LjM2NzE4LDkuNDQ5MjEgdiAxOC44OTg0NCBsIDE2LjM2NzE4LC05LjQ0OTIyIHogbSAtMzIuNzMyNDIsMzcuNzk0OTIgLTE2LjM2NTIzLDkuNDQ5MjIgdiAxOC44OTg0MyBsIDE2LjM2NTIzLC05LjQ0OTIyIHogbSAtMTYuMzY1MjMsMjguMzQ3NjUgLTE2LjM2NzE5LC05LjQ0OTIyIHYgMzcuNzk0OTMgbCAxNi4zNjcxOSwtOS40NDkyMiB6IgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMjY0NTgzMzMpIgogICAgICAgICBpZD0icGF0aDQ0OTEiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmOGJmM2M7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gMzYwLjA0ODgzLDY2OC45NzY1NiAtNjUuNDYyODksMzcuNzk0OTIgMTYuMzY1MjMsOS40NDkyMiA0OS4wOTc2NiwtMjguMzQ3NjUgMzIuNzMwNDcsMTguODk4NDMgMTYuMzY3MTgsLTkuNDQ5MjEgeiBtIDAsNTYuNjkzMzYgLTE2LjM2NzE5LDkuNDQ3MjcgMTYuMzY3MTksOS40NDkyMiAxNi4zNjUyMywtOS40NDkyMiB6IgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMjY0NTgzMzMpIgogICAgICAgICBpZD0icGF0aDQ1MDYiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
					alt="TensorFlow"
					width="16"
				/>
			</div>
		</div>
	);
}

export default Logo;
