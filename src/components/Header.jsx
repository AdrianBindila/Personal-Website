//navbar contains anchor links to all the other components lower on the page: Such as Bio (top of page), Projects, Contact info
function Header() {
  return (
    <div>
      <table>
        <td>
          <a href="#bio">Bio</a>
        </td>
        <td>
          <a href="#projects">Projects</a>
        </td>
        <td>
          <a href="#contact">Contact</a>
        </td>
      </table>
    </div>
  );
}
export default Header;
