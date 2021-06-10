export function MainComp() {
  return (
    <div className="border-b">
      <a
        type="button"
        className="rounded border focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center px-3 py-2 text-white font-medium text-xs bg-indigo-400 hover:bg-blue-700 focus:outline-none shadow-sm"
        href="https://sellercentral-europe.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.69a50f4e-2ab0-4bdc-ad39-053396c104eb&version=beta"
      >
        Connect with Amazon here
      </a>
      <h1 className="tracking-wide mt-6 mb-8 font-semibold text-5xl"> Posts</h1>
      My posts here
    </div>
  );
}
