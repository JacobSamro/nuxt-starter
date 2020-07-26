export default function (context) {
  console.log('I am a middleware', context.route)
  if (context.route.path === '/secure') {
    context.app.router.push('/')
    return true;
  }
  context.userAgent = 'Hello'
}
