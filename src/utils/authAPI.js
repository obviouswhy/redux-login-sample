// A mock function to mimic making an async request for data
export function autheticateUser(user) {
  const { username, password } = user
  return new Promise((resolve, reject) =>
    username === 'admin' && password === 'admin'
      ? setTimeout(
          () =>
            resolve({
              statusCode: 200,
              message: 'login successful',
              data: { isAuth: true },
            }),
          500,
        )
      : setTimeout(
          () =>
            reject({
              statusCode: 401,
              message: 'user or password is not correct',
              data: { isAuth: false },
            }),
          500,
        ),
  )
}
