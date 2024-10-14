import "./dashboardpage.css";

const DashboardPage = () => {
	return (
		<div className="dashboardPage">
			<div className="texts">
				<div className="logo">
					<img src="/logo.png" alt="" />
					<h1>NIO AI</h1>
				</div>
				<div className="options">
					<div className="option">
						<img src="/chat.png" alt="" />
						<span>Create new chat</span>
					</div>
					<div className="option">
						<img src="/image.png" alt="" />
						<span>Analyze an image</span>
					</div>
					<div className="option">
						<img src="/code.png" alt="" />
						<span>Help with code</span>
					</div>
				</div>
			</div>
			<div className="formContainer">
				<form>
					<input type="text" placeholder="Ask me anything" />
					<button>
						<img src="/arrow.png" alt="" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default DashboardPage;
