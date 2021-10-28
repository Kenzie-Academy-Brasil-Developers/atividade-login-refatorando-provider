import styled from 'styled-components'

export const FormContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 350px;
	height: 350px;
	margin: 0 auto;
	padding: 10px 20px;
	border-radius: 15px;
	background-color: #f3f3d3;
`
export const FormInput = styled.label`
	position: relative;
	margin-top: 20px;

	span {
		position: absolute;
		left: 0;
		top: 0;
		padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
		margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
		white-space: nowrap;
		transform: translate(0, 0);
		transform-origin: 0 0;
		background: #f3f3d3;
		color: #4f4e4c;
		transition: transform 120ms ease-in;
		font-weight: bold;
		line-height: 1.2;
	}
	input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		border: 3px solid #4f4e4c;
		padding: calc(0.5rem * 1.5) 0.5rem;
		color: #4f4e4c;
		background: transparent;
		border-radius: 4px;

		&:focus,
		&:not(:placeholder-shown) {
			& + span {
				transform: translate(0.25rem, -65%) scale(0.8);
				color:  #944913;
			}
		}
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
