// A mock function to mimic making an async request for data
export function autheticateUser(user) {
  const { username, password } = user
  return new Promise((resolve, reject) =>
    username === 'user' && password === '123'
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
              message: 'ユーザー名かパスワードは正しくありません。',
              data: { isAuth: false },
            }),
          500,
        ),
  )
}
