import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-extrabold text-center text-red-600 sm:text-5xl">Что-то пошло не так</h1>

      <Card className="max-w-md w-full">
        <CardHeader className="px-6 pt-6 pb-2 flex flex-col items-center">
          {isRouteErrorResponse(error) ? (
            <>
              <h2 className="text-6xl font-extrabold text-center text-red-500 sm:text-8xl">{error.status}</h2>
              <p className="mt-2 text-xl font-semibold text-center">{error.statusText}</p>
            </>
          ) : (
            <p className="text-xl font-semibold text-center">
              {error instanceof Error && 'message' in error ? error.message : 'Неизвестная ошибка'}
            </p>
          )}
        </CardHeader>

        <CardBody className="px-6 py-4">
          <p className="text-center mb-6">Попробуйте обновить страницу или воспользуйтесь навигацией ниже.</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Button onPress={() => navigate(-1)} variant="flat" fullWidth className="text-lg">
              Назад
            </Button>
            <Button onPress={() => navigate('/')} color="primary" fullWidth className="text-lg">
              Главная
            </Button>
          </div>
        </CardBody>

        <CardFooter className="px-6 pb-6 pt-4">
          <p className="text-center text-sm sm:text-base">
            Если ошибка повторяется, пожалуйста, свяжитесь с нами по почте:{' '}
            <a href="mailto:example@mail.ru" className="text-blue-600 hover:underline">
              example@mail.ru
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ErrorBoundary;
