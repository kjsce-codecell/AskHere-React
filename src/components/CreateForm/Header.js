import { Card, TextField, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

const Header = ({ setHeader ,header}) => {
	const theme = useTheme();
	const [title, setTitle] = useState(header.title);
	const [description, setDescription] = useState(header.description);

	useEffect(() => {
		setHeader({
			title,
			description,
		});
	}, [title, description, setHeader]);

	return (
		<Card
			sx={{
				padding: 5,
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<TextField
				variant="standard"
				fullWidth
				label="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				variant="standard"
				fullWidth
				label="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
		</Card>
	);
};

export default Header;