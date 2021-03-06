import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";
import api from "../../services/api";


import "./styles.css";

function TeacherList() {
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();

		const response = await api.get('/classes', {
			params: {
				subject,
				week_day,
				time
			}
		});

		setTeachers(response.data);
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os Profflys disponíveis.">

				<form id="search-teachers" onSubmit={searchTeachers}>
					<Select
						name="subject"
						label="Matéria"
						value={subject}
						onChange={(e) => { setSubject(e.target.value) }}
						options={[
							{value: "Português", label: "Português"},
							{value: "Matemática", label: "Matemática"},
							{value: "História", label: "História"},
							{value: "Geografia", label: "Geografia"},
							{value: "Ciências", label: "Ciências"},
							{value: "Química", label: "Química"},
							{value: "Educação Física", label: "Educação Física"},
							{value: "Artes", label: "Artes"},
							{value: "Física", label: "Física"},
							{value: "Biologia", label: "Biologia"}
						]}
					/>

					<Select
						name="week_daay"
						label="Dia da semana"
						value={week_day}
						onChange={(e) => { setWeekDay(e.target.value) }}
						options={[
							{value: "0", label: "Domingo"},
							{value: "1", label: "Segunda-feira"},
							{value: "2", label: "Terça-feira"},
							{value: "3", label: "Quarta-feira"},
							{value: "4", label: "Quinta-feira"},
							{value: "5", label: "Sexta-feira"},
							{value: "6", label: "Sábado"}
						]}
					/>

					<Input
						name="time"
						label="Hora"
						value={time}
						onChange={(e) => { setTime(e.target.value) }}
						type="time"
					/>

					<button type="submit">
						Buscar
					</button>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher, index) => {
					return <TeacherItem key={index} teacher={teacher}/>
				})}
				
			</main>
		</div>
	)
}


export default TeacherList;