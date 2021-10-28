import styled from 'styled-components'

export const DashboardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #fff;
	width: 450px;
	height: 450px;
	margin: 0 auto;
	margin-top: 90px;
	border-radius: 16px;

	& img {
		width: 220px;
	}

	& p {
		color: #000;
	}
`

export const Button = styled.button`
	cursor: pointer;
	border-radius: 16px;
	padding: 10px 35px;
	border: none;
	margin-top: 20px;
	background-color: #4f4e4c;
	color: white;
`
