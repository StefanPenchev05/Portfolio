import path from 'path';

const config = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
}

export default config;