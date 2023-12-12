import RootLayout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { store } from '@/redux/cart/store'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000,
      }
    }
  }))
  return (
    <>
      <Head>
        <Script>
          {`window.onunload = function(){ window.scrollTo(0,0)}`}
        </Script>
      </Head>
      <Provider store={store} >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
