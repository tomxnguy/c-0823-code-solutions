import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();
app.use(express.json());
app.use(errorMiddleware);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades/', async (req, res, next) => {
  try {
    const sql = `
      insert into "grades" ("course", "name", "score")
        values ($1, $2, $3)
        returning*;
    `;
    const params = [req.body.course, req.body.name, req.body.score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const sql = `
      DELETE
      from "grades"
      where "gradeId" =$1
      returning*;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    delete result.rows[0];
    res.status(204).json();
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const sql = `
      update "grades"
        set "name"=$1,
        "course"=$2,
        "score"=$3
      where "gradeId" =$4
      returning*;
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log(`Express server listening on port 8080`);
});
