import express from "express";
import db from "./database/connection";
import converHoursToMinutes from "./utils/convertHoursToMinutes";

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const trx = await db.transaction()

  try {
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });
  
    const user_id = insertedUsersIds[0];
  
    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id
    });
  
    const class_id = insertedClassesIds[0];
  
    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: converHoursToMinutes(scheduleItem.from),
        to: converHoursToMinutes(scheduleItem.to)
      };
    });
  
    await trx('class_schedule').insert(classSchedule);
  
    trx.commit();
  
    console.log(request.body);
  
    return response.status(201).send();

  } catch (error) {

    trx.rollback();
    
    return response.status(400).json({
      error: "Unexpected error while creating new class"
    });
  }
});

export default routes;