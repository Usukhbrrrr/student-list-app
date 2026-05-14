CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  major TEXT NOT NULL,
  year INTEGER NOT NULL
);

INSERT INTO students (name, major, year) VALUES
('Бат', 'Мэдээллийн технологи', 3),
('Саруул', 'Программ хангамж', 2),
('Тэмүүлэн', 'Компьютерийн ухаан', 4),
('Номин', 'Мэдээллийн систем', 1);