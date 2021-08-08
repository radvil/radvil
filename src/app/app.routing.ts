import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'desktop',
		pathMatch: 'full',
	},
	{
		path: 'desktop',
		loadChildren: () =>
			import('./desktop/desktop.module').then((m) => m.DesktopModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
