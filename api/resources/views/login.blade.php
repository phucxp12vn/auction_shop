<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="//code.jquery.com/jquery.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</head>
<body>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-6 col-md-offset-3">
				<form action="{{url('login')}}" method="POST" role="form">
					<legend class="text-center">Login</legend>
					@if($errors->has('errorlogin'))
						<div class="alert alert-danger">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
							{{$errors->first('errorlogin')}}
						</div>
					@endif
					<div class="form-group">
						<label for="">Email</label>
						<input type="text" class="form-control" id="email" placeholder="Email" name="email" value="{{old('email')}}">
						@if($errors->has('email'))
							<p style="color:red">{{$errors->first('email')}}</p>
						@endif
					</div>
					<div class="form-group">
						<label for="">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Password" name="password">
						@if($errors->has('password'))
							<p style="color:red">{{$errors->first('password')}}</p>
						@endif
					</div>
				
					
					{!! csrf_field() !!}
					<button type="submit" class="btn btn-success btn-block">Đăng nhập</button>
				</form>
				<hr style="color: black">
				<div class="d-flex justify-content-around">
					<form action="{{url('redirect/google')}}">
						<input type="submit" class="btn btn-warning" value="Google" />
					</form>
					<form action="{{url('redirect/facebook')}}">
						<input type="submit" class="btn btn-primary" value="Facebook" />
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>