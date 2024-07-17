import React from 'react';

const CardsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-4">
      <header className="bg-gray-200 dark:bg-gray-800 py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div>
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="animate-pulse space-y-4">
            <div className="h-64 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          {/* Card 2 */}
          <div className="animate-pulse space-y-4">
            <div className="h-64 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSkeleton;
