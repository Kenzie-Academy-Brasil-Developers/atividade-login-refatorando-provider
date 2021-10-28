import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../Providers/Auth'
import { FormContainer, Button, FormInput } from './styles'

interface UserData {
	email: string
	password: string
}

const Home = () => {
	const { signIn } = useAuth()

	const schema = yup.object().shape({
		email: yup.string().required('Email é obrigatório').email('Email Inválido'),
		password: yup.string().required('Senha é obrigatória'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserData>({ resolver: yupResolver(schema) })

	const onSubmit = (data: UserData) => {
		signIn(data)
	}

	return (
		<>
			<h1>Home</h1>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<FormInput>
					<input placeholder=' ' {...register('email')} />
					<span>Email</span>
				</FormInput>
				<FormInput>
					<input type='password' placeholder=' ' {...register('password')} />
					<span>Senha</span>
				</FormInput>
				<Button type='submit'>Entrar</Button>
			</FormContainer>
		</>
	)
}

export default Home
