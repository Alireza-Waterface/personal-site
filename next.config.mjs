/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: 'wjbwobxiekyzfcjxjnkt.supabase.co' }],
	},
	experimental: {
		runtime: 'nodejs',
	},
};

export default nextConfig;