#pragma strict

var enabled:Boolean = false;
var gravSource:transform;

function CustomGravity()
{
				var gravityDirection:Vector3 = (gravSource.transform.position - transform.position).normalized;
				rigidbody.AddForce((gravSource.transform.position - transform.position).normalized * 10);
				var rotation:Quaternion = Quaternion.FromToRotation(transform.up,gravityDirection) * transform.rotation;
				transform.rotation = Quaternion.Slerp(transform.rotation, rotation, 50 * Time.deltaTime);
}

function Update()
{
		CustomGravity();
};