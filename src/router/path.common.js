import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/views/Main'
import Home from '@/components/contents/HomePage'
import RankingPage from '@/components/contents/RankingPage'
import boardTable from '@/components/contents/boardTable'

const paths = [
    {
        path: '/',
        name: '/',
        component: Main,
        children: [
            {
                path: '/',
                component : Home
            },
            {
                path: 'rank',
                component : RankingPage
            },
            {
                path: 'board',
                component : boardTable
            }
        ]
    }
];

export default paths;