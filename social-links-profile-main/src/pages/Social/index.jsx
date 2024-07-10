export default function Social({ profilePicture, name, address, info }) {
  return (
    <>
      <img src={profilePicture} alt="Profile picture" />
      <p className="name">{name}</p>
      <p className="address">{address}</p>
      <p className="info">{info}</p>
    </>
  );
}
