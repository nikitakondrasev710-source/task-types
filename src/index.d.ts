// 1. Описываем базовый тип "Пользователь" (Person)
export interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female'; // Юнион-тип: только эти две строки
}

// 2. Описываем тип "Сотрудник" (Employee), который наследует все поля Person и добавляет company
export interface Employee extends Person {
    company: string;
}

/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
export function getPersons(): Person[]; // Возвращает массив объектов типа Person

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
export function personToString(person: Person | Employee): string; // Принимает либо Person, либо Employee, возвращает строку
