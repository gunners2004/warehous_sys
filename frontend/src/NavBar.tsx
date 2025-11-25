
// 3. Навигационная панель
const NavBar = ({ currentView, onViewChange }: { currentView: string, onViewChange: (view: string) => void }) => {
    return (
        <div className="nav-bar">
            <button
                className={`btn ${currentView === 'list' ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => onViewChange('list')}
                style={{ backgroundColor: currentView === 'list' ? '#e0e0e0' : 'transparent', color: currentView === 'list' ? '#333' : '#4a90e2', border: '1px solid #4a90e2' }}
            >
                View Library
            </button>
            <button
                className={`btn ${currentView === 'add' ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => onViewChange('add')}
            >
                Add New Product
            </button>
        </div>
    );
};