import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";


import "./styles.css";

function TeacherList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os Profflys disponíveis.">
				<form id="search-teachers">
				<Select
							name="subject"
							label="Matéria"
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

					<Input name="time" label="Hora" type="time" />
				</form>
			</PageHeader>

			<main>
				<TeacherItem/>
				<TeacherItem/>
				<TeacherItem/>
			</main>
		</div>
	)
}


export default TeacherList;