import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'

/**
 * 登录
 * @param {*} props
 * @returns
 */
const SignIn = props => {
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme({
    theme: siteConfig('THEME'),
    router: useRouter()
  })
  return <Layout {...props} />
}

export async function getStaticProps() {
  const from = 'SignIn'
  const props = await getGlobalData({ from })

  delete props.allPages
  return {
    props
  }
}

export default SignIn
