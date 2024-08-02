import ProjectSlider from "../components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-2 h-screen bg-[#0C011A] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/myprogectspace8.jpg)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative w-full text-left left-[-10px] z-10 flex flex-col md:flex-row items-center justify-center gap-2 pl-6 md:pl-8 max-w-[800px] md:max-w-[800px] lg:max-w-[800px] mt-12 md:mt-0">
        <div className="flex flex-col gap-4 w-full md:w-auto p-2 bg-opacity-80 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-[20px] md:text-[24px] lg:text-[36px] text-gray-200 mb-2">
            Пример проекта <span className="text-red-500">UserManagement</span>
          </h1>
          <p className="text-[12px] md:text-[16px] lg:text-[18px] text-gray-200 mb-2 mt-2">
            В проекте UserManagement я продемонстрировал:
          </p>
          <ul className="relative left-[-14px] text-[12px] md:text-[16px] lg:text-[18px] text-gray-200 list-disc list-inside pl-5 space-y-2">
            <li>Разработку на C# и .NET: Создал систему управления пользователями с использованием C# и .NET Framework. Реализовал основные функции для добавления, удаления, редактирования и управления пользователями.</li>
            <li>Работу с REST API: Спроектировал и внедрил REST API для взаимодействия с фронтендом и сторонними сервисами, что обеспечило возможность выполнения CRUD-операций через HTTP-запросы.</li>
            <li>Swagger: Настроил Swagger для генерации документации и тестирования API. Это упростило разработчикам тестирование конечных точек и улучшило понимание API.</li>
            <li>Bearer Token: Имплементировал Bearer Token для аутентификации и авторизации пользователей, что обеспечило безопасный доступ к API и защиту данных.</li>
            <li>Entity Framework: Использовал Entity Framework для работы с базой данных, что позволило упростить операции с данными и сделать код более поддерживаемым.</li>
            <li>Реализация фабричного метода: Применил паттерн проектирования фабричного метода для создания объектов различных типов пользователей в зависимости от их ролей.</li>
          </ul>
        </div>
      </div>
      <ProjectSlider />
      <div className="absolute bottom-0 left-0 w-full text-center pb-3">
        <blockquote className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-300 italic">
          &quot;Творчество — это интеллектуальный труд, который помогает найти новые решения для старых проблем.&quot; — Альберт Эйнштейн
        </blockquote>
      </div>
    </div>
  );
};

export default Page;
